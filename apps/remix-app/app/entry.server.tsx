/* eslint-disable no-console, no-param-reassign, no-magic-numbers */

/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import { PassThrough } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import isbot from 'isbot';
import type { AppLoadContext, EntryContext } from '@remix-run/node';
import { createReadableStreamFromReadable } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';

const ABORT_DELAY = 5000;

async function handleBotRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	return new Promise((resolve, reject) => {
		const { pipe, abort } = renderToPipeableStream(
			<RemixServer context={remixContext} url={request.url} abortDelay={ABORT_DELAY} />,
			{
				onAllReady() {
					const body = new PassThrough();

					responseHeaders.set('Content-Type', 'text/html');

					resolve(
						new Response(createReadableStreamFromReadable(body), {
							headers: responseHeaders,
							status: responseStatusCode,
						}),
					);

					pipe(body);
				},
				onError(error: unknown) {
					responseStatusCode = 500;
					console.error(error);
				},
				onShellError(error: unknown) {
					reject(error);
				},
			},
		);

		setTimeout(abort, ABORT_DELAY);
	});
}

async function handleBrowserRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	return new Promise((resolve, reject) => {
		const { pipe, abort } = renderToPipeableStream(
			<RemixServer context={remixContext} url={request.url} abortDelay={ABORT_DELAY} />,
			{
				onError(error: unknown) {
					console.error(error);
					responseStatusCode = 500;
				},
				onShellError(error: unknown) {
					reject(error);
				},
				onShellReady() {
					const body = new PassThrough();

					responseHeaders.set('Content-Type', 'text/html');

					resolve(
						new Response(createReadableStreamFromReadable(body), {
							headers: responseHeaders,
							status: responseStatusCode,
						}),
					);

					pipe(body);
				},
			},
		);

		setTimeout(abort, ABORT_DELAY);
	});
}

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
	loadContext: AppLoadContext,
) {
	return isbot(request.headers.get('user-agent'))
		? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext)
		: handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
