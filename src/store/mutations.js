// 显示弹窗
const showLayers = (state, data) => {
  state.layers = data;
  state.layers.show = true;
  state.layers.showIn = true;
  const timeLength = state.layers.msg.length / 10 * 1500;
  setTimeout(() => {
    state.layers.showIn = false;
  }, timeLength);
  setTimeout(() => {
    state.layers.show = false;
  }, timeLength + 800);
};
// 存储money值
export {
  showLayers,
};
