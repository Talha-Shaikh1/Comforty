import { NextRequest } from 'next/server';
import stripe from '@/lib/stripe';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get('session_id');

  if (!session_id || typeof session_id !== 'string') {
    return Response.json({ error: 'Invalid session ID' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items'],
    });

    return Response.json(session, { status: 200 });
  } catch (error) {
    console.error('Error retrieving session:', error);
    return Response.json({ error: 'Failed to retrieve session' }, { status: 500 });
  }
}
