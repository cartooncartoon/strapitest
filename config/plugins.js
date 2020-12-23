module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AKIATEGJPB64HGELZD6A',
        secretAccessKey: '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',
        region: 'us-east-1',
        params: {
          Bucket: 'strapiupload2',
        },
      },
    },
  });