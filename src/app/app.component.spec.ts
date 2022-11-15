import {render, waitFor, screen} from '@testing-library/angular'
// @ts-ignore
import {launches} from '../mocks/launches.js'
import { AppComponent } from './app.component';

describe('App', () => {
  test('should render mission names', async () => {
    await render(AppComponent)

    await waitFor(() => screen.getByText(launches[0].mission_name), {timeout:10000})
    // @ts-ignore
    launches.forEach(launch => screen.getByText(launch.mission_name))
  })
})
