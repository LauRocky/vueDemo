import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)
var state = {
  cardData: [],
  isloadingComplete: false,
  busy: false,
  isShow: false,
  test: [
    'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life' +
    +Math.random() * 100000000000,
  ]
};

var getters = {

}

var mutations = {
  updateLoadingState(state, data)
    {
      state.isloadingComplete = data;
    },
    updateBusyState(state, data)
    {
      state.busy = data;
    },
    addData(state, data)
    {
      state.cardData = state.cardData.concat(data);
    },
    refreshData(state, data)
    {
      state.cardData = data;
    },
    isShowAlert(state, data)
    {
      state.isShow = data;
    }
};

var actions = {
  getData(context, object)
  {
    var progress = object.progress;
    var isRefresh = object.refresh;
    progress.$Progress.start();
    context.commit('updateLoadingState', false);
    context.commit('updateBusyState', true);

    /**
     * use vue-resource
     */
    Vue.http.get('/api.json').then(response =>
    {
      var json = response.data;
      context.commit('updateLoadingState', true);
      context.commit('updateBusyState', false);
      if (isRefresh === true)
      {
        context.commit('refreshData', json);
      }
      else
      {
        context.commit('addData', json);
      }
      progress.$Progress.finish();
    }, response =>
    {
      context.commit('updateBusyState', false);
      progress.$Progress.fail();
    });
  }

};

var moduleCard = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
export default new Vuex.Store(
{
  strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
  modules:
  {
    user:user,
    moduleCard: moduleCard
  }
})
