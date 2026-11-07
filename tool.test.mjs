import test from 'node:test';
import assert from 'node:assert/strict';
import {compute} from './tool.mjs';
test('sample behavior',()=>{const result=compute({"text": "Olá Mundo! Projeto 2026"});for(const [key,value] of Object.entries({"slug": "ola-mundo-projeto-2026", "length": 22}))assert.deepStrictEqual(result[key],value,key)});
