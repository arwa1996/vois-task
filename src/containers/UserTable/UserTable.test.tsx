import { UserTable } from './UserTable';
import { renderInRedux } from '../../test-utils';

describe('UserTable', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should render successfully', async () => {
    const { renderResult } = renderInRedux(<UserTable />);
    expect(renderResult.container).toBeInstanceOf(HTMLElement);
  });
});
