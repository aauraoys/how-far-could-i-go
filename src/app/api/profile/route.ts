import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const profile = await prisma.profile.findFirst({
      include: {
        companies: {
          include: {
            projects: true
          }
        }
      }
    });
    
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ error: `Failed to fetch profile ${error}` }, { status: 500 });
  }
}