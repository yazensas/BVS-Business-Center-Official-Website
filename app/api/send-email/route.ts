import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "BVS Website <noreply@bvsbusinesscenter.com>",
      to: "info@sas-properties.com",
      subject: "New Website Enquiry - BVS Business Center",
      html: `
        <h2>New enquiry received</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Team Size:</strong> ${data.teamSize}</p>
        <p><strong>Looking For:</strong> ${data.lookingFor}</p>
        <p><strong>Message:</strong> ${data.comments}</p>
      `,
    });

    if (error) {
      return Response.json(
        { success: false, error },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}
