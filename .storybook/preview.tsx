import 'uno.css';
import '~/assets/style/reset.css';
import { MemoryRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import HeadProvider from '../src/providers/HeadProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story: any) => (
    <StrictMode>
      <HeadProvider>
        <MemoryRouter>
          <div className="text-text dark:text-dark-text">
            <Story />
          </div>
        </MemoryRouter>
      </HeadProvider>
    </StrictMode>
  )
]
