import { } from '@aws-cdk/aws-lambda'
import { APIGatewayProxyResult } from 'aws-lambda'

export const handler = async (): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: 'Hello World!!'
  }
}
