import helloComponent from './hello.component';

const module = angular.module('ng6-now-example.components.hello', []);

module.component('hello', helloComponent);

export default module.name;
