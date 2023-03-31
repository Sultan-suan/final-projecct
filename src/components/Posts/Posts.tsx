import React from 'react';

type PostsPropsType = {
    setIsAuth: (value: boolean) => void
}

export const Posts = (props: PostsPropsType) => {
    const auth = localStorage.getItem("isAuth")

    const compareDates = (date: any) => {
        const d1 = new Date().toISOString();
        const d2 = new Date(date).toISOString();
        if (d1 > d2) {
            return 1;
        } else {
            return 0;
        }
    }

    if (compareDates(+localStorage.getItem("tokenDeathTime")!)) {
        localStorage.setItem("isAuth", "false")
        props.setIsAuth(false)
    }

    return <div>
        {
            auth === "true"
                ? <div>Авторизован</div>
                : <div>Не авторизован</div>
        }
    </div>
}

