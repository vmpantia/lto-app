namespace LTO.BAL.Exceptions
{
    internal class BALException : Exception
    {
        public BALException(string? message) : base(message) { }
        public BALException(string? message, Exception? innerException) : base(message, innerException) { }
    }
}
