import { IResolvers } from 'graphql-tools'
import { database } from '../data/database.store'

const query: IResolvers = {
  Query: {
    students(): any {
      return database.students
    },
    student(_: void, { id }): any {
      const  result = database.students.filter( student => student.id === id ) [0]
      if (result && typeof result !== 'undefined') {
        return result
      } else {
        return {
          id: '-1',
          name: 'No se encontro ningun estudiante con ese id',
          email: '',
          courses: []
        }
      }
    },
    courses(): any {
      return database.courses
    },
  }
}


export default query;
