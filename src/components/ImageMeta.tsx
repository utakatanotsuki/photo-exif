import { ExifTag } from "../types";

import { useState, ChangeEventHandler } from "react";
import EXIF from "exif-js";
import { Input, useUpdateEffect } from "@chakra-ui/react";

type ImageData = ExifTag & {
  name: string;
  url: string;
};
async function getImageData(file: File) {
  return new Promise(async (resolve) => {
    await EXIF.getData(file as unknown as string, () => {
      resolve({
        name: file.name,
        url: URL.createObjectURL(file),
        ...EXIF.getAllTags(file),
      });
    });
  });
}

export function ImageMeta() {
  const [imageDataList, setImageDataList] = useState<ImageData[]>();

  const handleChange: ChangeEventHandler<HTMLInputElement> = async ({
    target: { files },
  }) => {
    if (files instanceof FileList) {
      const dataList: ImageData[] = [];
      for await (const file of files) {
        if (!file || !file.name) return;
        const data = await getImageData(file);
        dataList.push(data as ImageData);
      }
      setImageDataList(dataList);
    }
  };

  useUpdateEffect(() => {
    return () => {
      if (imageDataList) {
        imageDataList.forEach(({ url }) => {
          URL.revokeObjectURL(url);
        });
      }
    };
  }, [imageDataList]);

  console.log(imageDataList);

  return (
    <>
      <Input type="file" accept="image/*" multiple onChange={handleChange} />
      {imageDataList &&
        imageDataList.map(({ url, name, Make }) => (
          <img key={name} src={url} alt={name} />
        ))}
    </>
  );
}
