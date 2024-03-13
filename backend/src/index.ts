
import { Hono } from 'hono';
import { verify } from 'hono/jwt'
import { userRouter } from '../routes/user';
import { blogRouter } from '../routes/blog';
import { cors } from 'hono/cors';

// Create the main Hono app
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>();

app.use('/*', cors())

app.use('/api/v1/blog/*', async (c, next) => {
  const jwt = c.req.header('Authorization');
  if (!jwt) {
    c.status(401);
    return c.json({ error: 'unauthorized' });
  }

  const token = jwt;
  //@ts-ignore
  const payload = await verify(token, c.env.JWT_SECRET);

  if (!payload) {
    c.status(401);
    return c.json({ error: 'unauthorized' });
  }
  //@ts-ignore
  c.set('userId', payload.id);
  await next()
})


app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app
