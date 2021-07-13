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

  test('should render contact page', async () => {
    const page = await createPage('/contact')
    const body = await page.innerHTML('body')
    expect(body).toContain('Email')
  })

  test('should render application page', async () => {
    const page = await createPage('/application')
    const body = await page.innerHTML('body')
    expect(body).toContain('Resultat')
  })

  test('should render gallery page', async () => {
    const page = await createPage('/gallery')
    const body = await page.innerHTML('body')
    expect(body).toContain('gallery')
  })

  test('should render rgpd page', async () => {
    const page = await createPage('/rgpd')
    const body = await page.innerHTML('body')
    expect(body).toContain('RGPD')
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