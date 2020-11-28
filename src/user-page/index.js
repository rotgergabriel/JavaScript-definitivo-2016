import page from 'page'
import header from '../header'
import title from 'title'
import empty from 'empty-element'
import template from './template'


page('/:username', header, loadUser, function(ctx, next) {
    var main = document.getElementById('main-container')
    title(`platzigram - ${ctx.params.username}`)
    empty(main).appendChild(template(ctx.user))
})

async function loadUser(ctx, next) {
    try {
        ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json)
    } catch (err){
        console.log(err)
    }
}