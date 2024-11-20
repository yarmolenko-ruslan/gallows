import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Start from './components/Start/Start';
import Game from './components/Game/Game';
import { ContextProvider } from './context/Context';
import './app.scss';

const router = createHashRouter([
	{
		path: '/',
		element: <Start />,
	},
	{
		path: '/game',
		element: <Game />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ContextProvider>
			<RouterProvider router={router} />
		</ContextProvider>
	</React.StrictMode>
);
