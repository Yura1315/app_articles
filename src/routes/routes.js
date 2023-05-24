import Account from "../pages/Account/Account";
import Posts from "../pages/Posts/Posts";
import User from "../pages/User/User";


export const routes = [
    {
        path: '/',
        component: Posts,
    },
    {
        path: '/account',
        component: Account,
    },
    {
        path: '/user',
        component: User,
    }
];