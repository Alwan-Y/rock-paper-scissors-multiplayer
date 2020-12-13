export const PATH =  {
    API_REGISTER:'/user/register',
    API_LOGIN:'/user/login',
    API_LOGOUT:'/user/logout',
    API_GET_ROOM:'/room/id/:id',
    API_CREATE_ROOM:'/room/create',
    API_JOIN_ROOM:'/room/join',
    API_POST_CHOICE:'/room/choice/:id/:choice',

    DASHBOARD: '/',
    GET_ALL_USER:'/user',
    GET_ALL_BIO:'/user-bio',
    GET_ALL_HISTORY:'/user-history',
    DELETE_USER:'/delete-user/:id',
    DELETE_BIO:'/delete-bio/:id',
    DELETE_HISTORY:'/delete-room/:id',
    UPDATE_ROLE_BASE:'/update-user/:id',

    GET_ROOM: '/id/:id',
    CREATE_ROOM: '/create',
    JOIN: '/join',
    PLAY: '/play',
    CHOICE: '/choice/:id/:choice',
    RESULT: '/result',
    RESET_ROOM: '/reset-room',

    REGISTER: '/register',
    LOGIN: '/login',
    LOGOUT: '/logout',
}

export default PATH