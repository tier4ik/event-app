<template>
    <Layout>
        <h1>{{ $page.event.title }}</h1>
        <img :src="$page.event.image">
        <p>{{ $page.event.description }}</p>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
    event(id: $id) {
        id
        title
        description
        duration
        price
        date
        image
    }
}
</page-query>