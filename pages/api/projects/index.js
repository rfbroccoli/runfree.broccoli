import Project from "../../../models/project";
import Student from "../../../models/student";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const projects = await Project.find().populate("added_by");
    return res.json(projects);
  } else if (req.method === "POST") {
    const { name, desc, added_by, type, status, url } = req.body;
    try {
      const studentDoc = await Student.findOne({ _id: added_by });
      if (!studentDoc) {
        return res.status(404).json({ error: "invalid secret id" });
      }
      const doc = await Project.create({
        name,
        desc,
        added_by,
        type,
        status,
        url,
        updated_at: new Date(),
        created_at: new Date(),
      });
      return res.status(201).json(doc);
    } catch (e) {
      return res.status(400).json(e);
    }
  } else if (req.method === "DELETE") {
    const { _id, added_by } = req.body;
    try {
      console.log({ _id, added_by });
      await Project.deleteOne({ _id, added_by });
      return res.status(200).json("deleted");
    } catch (e) {
      return res.status(405).json(e);
    }
  }
}
