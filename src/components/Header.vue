<template>
    <div class="level header">
        <h1 class="level-item has-text-centered title title-logo">NEWS</h1>            
    </div>
</template>
<style scoped lang="scss">
    .header {
        padding: 1.5rem;
        .title{
            &-logo{
                &:after,
                &:before{
                    content: "-";
                    font-size: 2.5rem;
                    font-weight: 100;
                    color:#ddd;
                    display: block;
                }
                &:after{
                    left: 0;
                    padding-left: 1rem;
                }
                &:before{
                    right: 0;
                    padding-right: 1rem;
                }
            }
        }
    }
</style>