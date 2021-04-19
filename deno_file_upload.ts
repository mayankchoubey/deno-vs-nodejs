import { serve } from "https://deno.land/std/http/server.ts";
import { MultipartReader, isFormFile } from "https://deno.land/std/mime/mod.ts";
const s = serve({ port: 3000 });
for await (const req of s) {
    const ct = req.headers.get("content-type");
    let boundary:any = "";
    if(ct?.startsWith('multipart/form-data'))
        boundary=ct?.split(";")[1]?.split("=")[1];
    const mr = new MultipartReader(req.body, boundary);
    const form = await mr.readForm();
    const retBody:any={};
    for(const entry of form.entries()) {
        const fileData=entry[1];
        if(isFormFile(fileData))
            retBody[fileData.filename]={uploadedSize: fileData?.size};
        else 
            retBody[entry[0]]=entry[1];
    }
    req.respond({ body: JSON.stringify(retBody) });
}
