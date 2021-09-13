import {Home, MyAccount, OnePost, OneQuestion, Posts, Questions} from "./componentsList";

const routesList = [
    {
        name: "Главная",
        path: "/",
        component: Home,
        exact: true
    },
    {
        name: "Все вопросы",
        path: "/asks",
        component: Questions,
        exact: true
    },
    {
        name: "Один вопрос",
        path: "/asks/:questionId",
        component: OneQuestion,
        exact: true
    },
    {
        name: "Посты",
        path: "/posts",
        component: Posts,
        exact: true
    },
    {
        name: "Один пост",
        path: "/posts/:postId",
        component: OnePost,
        exact: true
    },
    {
        name: "Личный кабинет",
        path: "/my-profile",
        component: MyAccount,
        exact: true
    }
]

export default routesList;