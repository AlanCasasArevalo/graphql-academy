import { IResolvers } from 'graphql-tools'
import { database } from '../data/database.store'
import _ from 'lodash'
const mutation: IResolvers = {
  Mutation:{
    newCourse(_: void, { course }): any {
      const courseAdded = {
        id: String(database.courses.length+1),
        title: course.title,
        description: course.description,
        classes: course.classes,
        time: course.time,
        logo: course.logo,
        level: course.level,
        path: course.path,
        teacher: course.teacher,
        reviews: []
      }
      database.courses.push(courseAdded)
      return database.courses
    }
}
}

export default mutation;
