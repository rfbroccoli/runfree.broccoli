// import Project from "../../models/project";
import Student from "../../models/student";
import dbConnect from "../../lib/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const students = await Student.find({ username: { $ne: "pwhbdev" } });
    return res.json(students);
  }
  //   if (req.method === "POST") {
  //     const { name, desc, added_by, type, status } = req.body;
  //     const studentDoc = await Student.findOne({ _id: added_by });
  //     if (!studentDoc) {
  //       return res.json({ error: "invalid secret id" });
  //     }
  //     const doc = await Project.create({
  //       name,
  //       desc,
  //       added_by,
  //       type,
  //       status,
  //       updated_at: new Date(),
  //       created_at: new Date(),
  //     });
  //     return res.json(doc);
  //   }
}
