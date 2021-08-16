import { Selector } from 'testcafe'

fixture`First time TestCafe`
    .page`https://the-internet.herokuapp.com/login`

test('First testcase in testcafe', async t => {
    await t.typeText(Selector('#username'), 'Alfred')
    await t.typeText(Selector('#password'), 'Password')
    await t.click(Selector('button'))
    await t.expect(Selector('#flash').innerText).contains('Your username is invalid!')
})