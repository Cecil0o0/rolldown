// cSpell:ignore packagejson
import { run } from './runner'

const args = process.argv.slice(2)
const debug = args.includes('--debug')
const includeList = [
  'snapshots_importstar.txt',
  'snapshots_default.txt',
  'snapshots_packagejson.txt',
  'snapshots_dce.txt',
]
run(includeList, debug)
