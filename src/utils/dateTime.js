import React from 'react';

export function dateTime(date) {
    const convertDate = new Date(date)
    .toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    return (<time dateTime={date}>{convertDate}</time>)
}

export function howTime(date) {
    const convertHours = new Date(date)
    .toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    })

    return (<time datetime={date}>{convertHours}</time>)
}