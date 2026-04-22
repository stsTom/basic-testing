import axios from 'axios';
import { throttledGetDataFromApi } from './index';

// Mock axios module
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock lodash throttle to be a pass-through so we test the core function directly
jest.mock('lodash', () => ({
  ...jest.requireActual('lodash'),
  throttle: (fn: Function) => fn,
}));

describe('throttledGetDataFromApi', () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const mockGet = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    // axios.create returns a mock client with a .get method
    mockedAxios.create.mockReturnValue({ get: mockGet } as any);
  });

  test('should create instance with provided base url', async () => {
    mockGet.mockResolvedValue({ data: [] });

    await throttledGetDataFromApi('/posts');

    expect(mockedAxios.create).toHaveBeenCalledWith({
      baseURL: BASE_URL,
    });
  });

  test('should perform request to correct provided url', async () => {
    mockGet.mockResolvedValue({ data: [] });

    const relativePath = '/posts/1';
    await throttledGetDataFromApi(relativePath);

    expect(mockGet).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const mockData = { id: 1, title: 'Test Post' };
    mockGet.mockResolvedValue({ data: mockData });

    const result = await throttledGetDataFromApi('/posts/1');

    expect(result).toEqual(mockData);
  });
});