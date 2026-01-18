export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  console.log(courseId);
  return <div>{courseId}</div>;
}
