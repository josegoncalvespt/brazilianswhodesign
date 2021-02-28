import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("2PACX-1vTKMdGdr071Eorezl9atrw_Vfucu5Vrg5sGEze9ageFt4HtGmgviPwv_QklxR3MQhv-jzYaPC_uF3mB");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
