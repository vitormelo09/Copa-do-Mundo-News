import {header} from '../components/header'
import {hero} from'../components/hero'
import { countdown } from '../components/countdown'

export function home() {
    return `
    ${header()}

    <main>
        ${hero()}
        ${countdown()}
    </main>
    `
}