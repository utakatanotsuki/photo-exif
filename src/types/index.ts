export type ExifTag = {
  /**
   * 品牌
   * FUJIFILM
   */
  Make: string;
  /**
   * 機型
   * X-H2
   */
  Model: string;
  /**
   * 原始拍攝時間
   * 21:08:02
   */
  DateTimeOriginal: string;
  /**
   * 光圈 F值
   * 1.2
   */
  FNumber: Number;
  /**
   * 曝光模式
   * 0 = Auto exposure
   * 1 = Manual exposure
   * 2 = Auto bracket
   */
  ExposureMode: number;
  /**
   * 曝光程序
   * Manual
   * Normal program
   * Aperture priority
   * Shutter priority
   */
  ExposureProgram: string;
  /**
   * 曝光偏移 (ev)
   * 0.33
   */
  ExposureBias: number;
  /**
   * 曝光時間 (ms)
   * 0.01666, numerator: 10, denominator: 600
   */
  ExposureTime: Number;
  /**
   * 閃光燈狀態
   * Flash did not fire, Flash fired
   */
  Flash: string;
  /**
   * 鏡頭焦距
   * 23
   */
  FocalLength: Number;
  /**
   * 等效焦距
   * 35
   */
  FocalLengthIn35mmFilm: number;
  /**
   * ISO
   */
  ISOSpeedRatings: number;
  /**
   * 像素值
   * 7728 x 5152
   */
  PixelXDimension: number;
  PixelYDimension: number;
  /**
   * 場景捕捉類型
   * Standard, Landscape, Portrait, Night scene
   */
  SceneCaptureType: string;
  /**
   * 白平衡模式
   * Auto white balance, Manual white balance
   */
  WhiteBalance: string;
};
