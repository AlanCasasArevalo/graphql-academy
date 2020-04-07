import { IResolvers } from 'graphql-tools'
import { database } from '../data/database.store'
import _ from 'lodash'
const mutation: IResolvers = {
  Mutation:{
    newCourse(_: void, { course }): any {
      let courses = database.courses
      if (courses.filter(courseIntoDataBase => (courseIntoDataBase.title === course.title && courseIntoDataBase.classes === course.classes)).length === 0) {
        const courseAdded = {
          id: String(courses.length+1),
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
        courses.push(courseAdded)
        return courses
      } else {
        courses = []
        return courses
      }
    }
}
}

export default mutation;
