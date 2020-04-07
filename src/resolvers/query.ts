import { IResolvers } from 'graphql-tools'

const query: IResolvers = {
  Query: {
    students(): string {
      return 'Student list'
    }
  }
}

export default query;
