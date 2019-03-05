import path from 'path';
import fetch from 'node-fetch';
import { Polly } from '@pollyjs/core';
import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import FSPersister from '@pollyjs/persister-fs';

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

const polly = new Polly('example-request', {
  adapters: ['node-http'],
  logging: true,
  persister: 'fs',
  persisterOptions: {
    fs: {
      recordingsDir: path.resolve(__dirname, './recordings')
    }
  }
});

(async function () {
  const firstResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const firstResponseData = await firstResponse.json();
  console.log(firstResponseData);

  polly.server.get('https://made-up-website.com/hello-world').intercept((req, res) => {
    res.status(200).json({ foo: 'bar' });
  });

  const secondResponse = await fetch('https://made-up-website.com/hello-world');
  const secondResponseData = await secondResponse.json();
  console.log(secondResponseData);

  await polly.stop();
})();
