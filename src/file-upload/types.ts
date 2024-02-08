type WaircUploadStatus = 'pending' | 'uploaded' | 'failed';

type WaircFileUpload = {
  filename: string;
  status: WaircUploadStatus;
  ext: string;
  iconName: string;
};

const statusMessages: Record<WaircUploadStatus, string> = {
  pending: 'File is waiting to be uploaded.',
  uploaded: 'File successfully uploaded.',
  failed: 'File failed to upload.',
};

export { WaircUploadStatus, WaircFileUpload, statusMessages };
