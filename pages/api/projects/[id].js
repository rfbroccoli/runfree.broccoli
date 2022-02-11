import Project from "../../../models/project";
import Student from "../../../models/student";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const { id } = req.query;
    const project = await Project.findOne({ _id: id });
    res.json(project);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    await Project.deleteOne({ _id: id });
    res.json("deleted");
  } else if (req.method === "PATCH") {
    const { id } = req.query;
    const { name, desc, type, status, url } = req.body;
    const project = await Project.findOneAndUpdate(
      { _id: id },
      {
        name,
        desc,
        type,
        status,
        url,
        updated_at: new Date(),
      },
      {
        new: true,
      }
    );
    res.json(project);
  }
}
