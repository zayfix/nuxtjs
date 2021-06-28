import { setupTest, createPage } from '@nuxt/test-utils'

describe('browser', () => {
  setupTest({
    testDir: __dirname,
    fixture: 'example',
    browser: true
  })

  test('should render login page', async () => {
    const page = await createPage('/login')
    const body = await page.innerHTML('body')
    expect(body).toContain('Connexion')
  })

  test('should render sign in page', async () => {
    const page = await createPage('/signIn')
    const body = await page.innerHTML('body')
    expect(body).toContain('Inscription')
  })

  test('should render forget password page', async () => {
    const page = await createPage('/forgetPass')
    const body = await page.innerHTML('body')
    expect(body).toContain('Mot de passe oublié')
  })

  test('should render 404 page', async () => {
    const page = await createPage('/404')
    const body = await page.innerHTML('body')
    expect(body).toContain('Not Found')
  })

  test('should render 404 page', async () => {
    const page = await createPage('/test')
    const body = await page.innerHTML('body')
    expect(body).toContain('Not Found')
  })
})