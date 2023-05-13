namespace LTO.Common.Exceptions
{
    internal class CommonException : Exception
    {
        public CommonException(string? message) : base(message) { }
        public CommonException(string? message, Exception? innerException) : base(message, innerException) { }
    }
}
