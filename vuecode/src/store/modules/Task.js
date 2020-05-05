export default {
  state: {
    // 任务列表
    TaskLists: [],
    // 任务进行列表
    TaskStatus: [],
    // 任务审核列表
    TaskReview: []
  },
  mutations: {
    add(state, obj) {
      let index = state.TaskLists.findIndex(value => value.id == obj.id);
      state.TaskLists.push(obj)

      // 如果TaskLists任务列表存在一条数据，删除第一条任务数据并添加任务
      if (index != -1) {
        state.TaskLists.splice(0, 1)
      }
    },
    addstatus(state, obj) {
      state.TaskStatus.push(obj)
    },
    addreview(state, obj) {
      state.TaskReview.push(obj)
    }
  }
};