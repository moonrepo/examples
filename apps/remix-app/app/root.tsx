import { add } from '@company/browser-package';
import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

export const meta: MetaFunction = () => ({
	// eslint-disable-next-line unicorn/text-encoding-identifier-case
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
	// Testing imports of local workspace packages
	// eslint-disable-next-line no-console
	console.log(add(1, 1));

	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
