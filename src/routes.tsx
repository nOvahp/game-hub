import { createBrowserRouter } from "react-router-dom";
import Layout from "./assets/pages/Layout";
import HomePgae from "./assets/pages/HomePgae";
import GameDetailPage from "./assets/pages/GameDetailPage";


const router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePgae /> },
            { path: "/games/:id", element: <GameDetailPage /> }
        ]
    }
])

export default router;