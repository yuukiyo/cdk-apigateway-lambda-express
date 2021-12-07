import * as cdk from '@aws-cdk/core';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs'
import { Runtime } from '@aws-cdk/aws-lambda'
import { LambdaRestApi } from '@aws-cdk/aws-apigateway'

export class CdkApigatewayLambdaExpressStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new NodejsFunction(this, 'lambda', {
      entry: 'src/lambda.ts',
      handler: 'handler',
      runtime: Runtime.NODEJS_14_X
    })

    new LambdaRestApi(this, 'rest-api', {
      handler: lambda
    })
  }
}
