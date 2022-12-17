
function extractFileName(file)
{
    var fileList = file.target.files;
    if (file.target.files.length != 0)
    {
        setFile(file.target.files[0].name)
    }
    alert(file.target.files[0].name)
}