import { Model, ILgxQueryConfig } from 'lgx-axios-dev-tools';

export class Base extends Model {
  public queryConfig: ILgxQueryConfig = {
    orderBy: 'sort',
    with: 'populate',
    per_page: 'itemsPerPage',
  };
  baseUrl() {
    return 'https://coder-house-api.herokuapp.com/v1';
  }
}
