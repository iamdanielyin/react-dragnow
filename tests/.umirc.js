
export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'REACT-DRAGNOW-TEST',
      dll: false,
      pwa: false,
      routes: {
        exclude: [],
      },
      hardSource: false
    }]
  ]
}
