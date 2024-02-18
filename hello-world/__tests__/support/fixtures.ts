import * as fs from 'fs'

export async function getFixture(filename) {
  const content = await fs.promises.readFile(
    `./__tests__/fixtures/${filename}`,
    { encoding: 'utf8' }
  )

  return JSON.parse(content)
}
